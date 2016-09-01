
# Elasticsearch + kibana
start-elasticsearch-kibana:
	docker-compose up

start-statsd:
	node node_modules/statsd/stats.js statsd_config.js

import-statsd-es-template:
	sh node_modules/statsd-elasticsearch-backend/es-index-template.sh \
	|| echo "Use environment variables to specify the IP and PORT of your elasticsearch as follow:" \
	&& echo "ES_HOST='192.168.99.100' ES_PORT=9200 make import-statsd-es-template"

start-demo-1:
	node demo_1

start-demo-2:
	node demo_2

start-fake-traffic:
	node fake_traffic