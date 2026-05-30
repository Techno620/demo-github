FROM ubuntu:latest
WORKDIR /app
COPY app.sh .
RUN sed -i "s/\r$//" app.sh && chmod +x app.sh
CMD ["./app.sh"]