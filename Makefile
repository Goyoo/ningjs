# Elasticsearch + kibana
start-elasticsearch-kibana:
    docker-compose up

start-demo-1-statsd:
    node node_modules/statsd/stats.js statsd_config.js
