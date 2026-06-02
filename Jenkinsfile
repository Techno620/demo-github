pipeline{
    agent any

    environment{
        DOCKER_IMAGE= "prince093kumar/nodeapp:v1"
        GHCR_IMAGE= "ghcr.io/prince093kumar/nodeapp:v1"
    }

    stages{
        stage("Checkout"){
            steps{
                git branch: 'main',
                url: 'https://github.com/Techno620/demo-github.git'
            }
        }

        stage("install"){
            steps{
                dir('4OM60_INT332/demo'){
                    bat 'npm install'
                }
            }
        }

        stage("test"){
            steps{
                dir('4OM60_INT332/demo'){
                    bat "npm test"
                }
            }
        }

        stage("Build Docker image"){
            steps{
                dir('4OM60_INT332/demo'){
                    bat 'docker build -t %DOCKER_IMAGE% .'
                    bat 'docker tag %DOCKER_IMAGE% %GHCR_IMAGE%'
                }
            }
        }

        stage("Docker Hub login"){
            steps{
                dir('4OM60_INT332/demo'){
                    withCredentials([
                        usernamePassword(
                            credentialsId:'dockerhub',
                            usernameVariable: 'docker_User',
                            passwordVariable: 'docker_pass'
                        )
                    ]){
                        bat 'echo %docker_pass% | docker login -u %docker_User% --password-stdin'
                    }
                }
            }
        }

        stage("Push Docker Hub"){
            steps{
                dir('4OM60_INT332/demo'){
                    bat 'docker push %DOCKER_IMAGE%'
                }
            }
        }

        stage("GHCR login"){
            steps{
                dir('4OM60_INT332/demo'){
                    withCredentials([
                        usernamePassword(
                            credentialsId:"ghcr_id",
                            usernameVariable: "ghcr_user",
                            passwordVariable: "ghcr_pass"
                        )
                    ]){
                        bat 'echo %ghcr_pass% | docker login ghcr.io -u %ghcr_user% --password-stdin'
                    }
                }
            }
        }

        stage("Push GHCR"){
            steps{
                dir('4OM60_INT332/demo'){
                    bat 'docker push %GHCR_IMAGE%'
                }
            }
        }

        stage("Deploy"){
            steps{
                bat '''
                    docker stop nodeapp
                    docker rm nodeapp

                    docker run -d --name nodeapp -p 3000:3000 %DOCKER_IMAGE%

                    exit /b 0
                '''
            }
        }
    }

    post{
        success{
            echo "Pipelines executed successfully"
        }
        failure{
            echo "Failed pipeline"
        }
    }
}