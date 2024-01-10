FROM nginx:latest

WORKDIR /usr/share/nginx/html/app/

RUN apt-get update && apt-get upgrade -y && apt-get install git -y

RUN git clone -b (nameBranch) https://github.com/AmandaKly/denysfrontend.git .

CMD ["bash", "-c", "git pull && nginx -g 'daemon off;'"]

EXPOSE 80
