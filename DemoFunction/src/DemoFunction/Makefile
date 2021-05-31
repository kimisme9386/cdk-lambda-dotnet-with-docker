SHELL := /bin/bash -o pipefail

.PHONY: lambda-build
lambda-build:
	docker build -t cdk-lambda-dotnet:latest  .

.PHONY: lambda-run
lambda-run: lambda-build
	docker run -p 9000:8080 cdk-lambda-dotnet:latest

.PHONY: lambda-test
lambda-test:
	curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"firstName":"Chris", "surname":"Yang"}'
