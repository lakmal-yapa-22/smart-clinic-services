module.exports = {
  apps : [
    {
      name: 'cloud-sql-auth-proxy',
      script: './cloud-sql-proxy',
      args: 'smart-clinic-491615:asia-southeast1:mysql-vm --private-ip',
      log_file: './logs/cloud-sql-auth-proxy.log',
      instances: 1,
      autorestart: true,
    },
      {
        name   : "appointment-service",
        script : "java -jar appointment-service/target/appointment-service-1.0.0.jar",
        log_file:"./logs/appointment-service.log",
         instances:2
      },
    {
      name   : "billing-service",
      script : "java -jar billing-service/target/billing-service-1.0.0.jar",
      log_file:"./logs/billing-service.log",
      instances:2
    },
    {
      name   : "patient-service",
      script : "java -jar patient-service/target/patient-service-1.0.0.jar",
      log_file:"./logs/patient-service.log",
      instances:2
    }
  ]
}