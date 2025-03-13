FROM openjdk:17-jdk
COPY build/libs/*SNAPSHOT.jar /app.jar
COPY streaming.sql .
ENTRYPOINT ["java","-jar","/app.jar"]