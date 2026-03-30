module.exports = {
  apps : [
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
