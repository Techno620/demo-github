cmake_minimum_required(VERSION 3.10)
project(CppBackend)

set(CMAKE_CXX_STANDARD 17)

find_package(mongocxx REQUIRED)
find_package(bsoncxx REQUIRED)

add_executable(backend_app src/main.cpp)

target_link_libraries(backend_app PRIVATE mongo::mongocxx_shared bsoncxx)