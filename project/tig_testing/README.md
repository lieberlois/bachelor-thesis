# Setup

1. Run the services using `docker-compose up`.
1. Visit [NodeRED](http://localhost:1880), drag-and-drop the file NodeRED.json into NodeRED and hit "DEPLOY" in the top right.
1. Now visit [Grafana](http://localhost:3000) and login with the credentials "admin" and "admin".
1. Under Settings → Data Sources add an InfluxDB data source:

```
URL: http://influxdb:8086
Database: sensors
User: admin
Password: admin
```

1. Under Create → Import load in the file "Grafana.json". You can now view the dashboard.

# Cleanup

To stop all running Docker Containers run the command `docker-compose down --volumes`.
