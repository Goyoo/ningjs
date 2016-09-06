
# Elasticsearch + kibana
start-elasticsearch-kibana:
	docker-compose up

start-statsd:
	node node_modules/statsd/stats.js statsd_config.js

start-demo-1:
	node demo_1

start-demo-2:
	node demo_2

start-demo-3:
	node demo_3

start-fake-traffic:
	node fake_traffic

# Database setup scripts
import-statsd-es-template:
	sh node_modules/statsd-elasticsearch-backend/es-index-template.sh \
	|| echo "Use environment variables to specify the IP and PORT of your elasticsearch as follow:" \
	&& echo "ES_HOST='192.168.99.100' ES_PORT=9200 make import-statsd-es-template"

import-kibana-datababase-from-file:
	node node_modules/elasticdump/bin/elasticdump \
	--input="dumps/kibana_mapping.json" \
	--output="http://192.168.99.100:9200/.kibana" \
	--type=mapping
	node node_modules/elasticdump/bin/elasticdump \
	--input="dumps/kibana_data.json" \
	--output="http://192.168.99.100:9200/.kibana" \
	--type=data


# Admin stuff, you shouldn't have to use that
export-kibana-datababase-to-file:
	node node_modules/elasticdump/bin/elasticdump \
	--input="http://192.168.99.100:9200/.kibana" \
	--output="dumps/kibana_mapping.json" \
	--type=mapping
	node node_modules/elasticdump/bin/elasticdump \
	--input="http://192.168.99.100:9200/.kibana" \
	--output="dumps/kibana_data.json" \
	--type=data