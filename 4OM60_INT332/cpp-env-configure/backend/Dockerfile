# ---------- Build Stage ----------
FROM ubuntu:22.04 AS builder

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    wget \
    gnupg

# Add MongoDB official repo (for libmongoc)
RUN wget -qO - https://pgp.mongodb.com/server-6.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb.gpg && \
    echo "deb [ arch=amd64 signed-by=/usr/share/keyrings/mongodb.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" \
    | tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Install Mongo C driver
RUN apt-get update && apt-get install -y \
    libmongoc-dev \
    libbson-dev

# Install Mongo C++ driver manually (build from source)
RUN wget https://github.com/mongodb/mongo-cxx-driver/archive/refs/tags/r3.7.0.tar.gz && \
    tar -xzf r3.7.0.tar.gz && \
    cd mongo-cxx-driver-3.7.0/build && \
    cmake .. -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=ON && \
    cmake --build . --target install

WORKDIR /app
COPY . .

RUN mkdir build && cd build && \
    cmake .. && \
    make

# ---------- Runtime Stage ----------
FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    libmongoc-1.0-0 \
    libbson-1.0-0

WORKDIR /app
COPY --from=builder /app/build/backend_app .

EXPOSE 8080

CMD ["./backend_app"]