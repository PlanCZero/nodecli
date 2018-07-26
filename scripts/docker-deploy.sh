echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build --build-arg version="$TRAVIS_TAG" -t planczero/nodecli .
docker tag planczero/nodecli:latest planczero/nodecli:$TRAVIS_TAG
docker push "planczero/nodecli:latest" && docker push "planczero/nodecli:$TRAVIS_TAG"