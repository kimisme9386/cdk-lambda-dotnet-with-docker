FROM public.ecr.aws/lambda/dotnet:core2.1 AS builder

WORKDIR /var/task

COPY . .

RUN chmod 755 dotnet-install.sh && \
  ./dotnet-install.sh -c 2.1 && \
  /root/.dotnet/dotnet tool install -g Amazon.Lambda.Tools && \
  yum -y install zip

ENV PATH="/root/.dotnet:/root/.dotnet/tools:${PATH}" DOTNET_ROOT=/root/.dotnet

RUN dotnet lambda package

FROM public.ecr.aws/lambda/dotnet:core2.1

WORKDIR /var/task

COPY --from=builder /var/task/bin/Release/netcoreapp2.1/publish/* .

CMD [ "DemoFunction::DemoFunction.Function::FunctionHandler"]