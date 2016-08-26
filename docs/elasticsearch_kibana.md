First step: Get elasticsearch and kibana running
-------------

Prerequisite is to have docker and docker compose installed on your machine. Then just open a terminal with current path to this repository and type

```bash
$> docker-compose up
```

Wait for a while, when everything seems started open your browser to check if everything is ok.

### Elasticsearch

Go to [localhost:9200](localhost:9200)

You should get something like this:

```javascript
{
    "name": "Ringleader",
    "cluster_name": "elasticsearch",
    "version": {
        "number": "2.3.5",
        "build_hash": "90f439ff60a3c0f497f91663701e64ccd01edbb4",
        "build_timestamp": "2016-07-27T10:36:52Z",
        "build_snapshot": false,
        "lucene_version": "5.5.0"
    },
    "tagline": "You Know, for Search"
}
```

Elasticsearch is ok, move on to kibana now.
Go to [localhost:9200](localhost:9200)

Work in progress...
