pipeline{
    agent any

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
    }
}