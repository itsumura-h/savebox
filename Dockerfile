FROM node:slim
RUN apt update && apt upgrade -y
RUN apt install -y \
      wget \
      gpg \
      yarn \
      git \
      vim

RUN yarn global add truffle

RUN wget -O ~/vsls-reqs https://aka.ms/vsls-linux-prereq-script && chmod +x ~/vsls-reqs && ~/vsls-reqs # VSCode Live Share
WORKDIR /app
