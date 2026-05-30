#include <cstdlib>
#include <iostream>

#include <mongocxx/client.hpp>
#include <mongocxx/instance.hpp>
#include <mongocxx/uri.hpp>

int main() {
    mongocxx::instance instance{};

    const char* uri_str = std::getenv("MONGO_URI");
    const char* port = std::getenv("APP_PORT");

    if (!uri_str) {
        std::cerr << "Error: MONGO_URI not set" << std::endl;
        return 1;
    }

    try {
        mongocxx::client client{mongocxx::uri{uri_str}};
        auto db = client["mydatabase"];

        std::cout << "✅ Connected to MongoDB!" << std::endl;
        std::cout << "🚀 Server running on port: "
                  << (port ? port : "8080") << std::endl;

    } catch (const std::exception& e) {
        std::cerr << "MongoDB connection failed: " << e.what() << std::endl;
        return 1;
    }

    return 0;
}