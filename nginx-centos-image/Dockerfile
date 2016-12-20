FROM centos:centos6
MAINTAINER GAURI SHANKAR P <gauri.gshankar@yahoo.co.in>
RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nginx; yum clean all
COPY nginx.conf /etc/nginx/
RUN mkdir -p /usr/share/nginx/html/gauri
RUN echo "nginx on CentOS 6 inside Docker" > /usr/share/nginx/html/index.html
RUN echo "nginx on CentOS 6 inside Docker Gauri File" > /usr/share/nginx/html/gauri/index.html
EXPOSE 80
CMD ["/usr/sbin/nginx"]
