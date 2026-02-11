#!/bin/bash

LOG_FILE="app.log"
S3_BUCKET="your-s3-bucket-name"

if [ -f "$LOG_FILE" ]; then
  aws s3 cp $LOG_FILE s3://$S3_BUCKET/app.log
  echo "Log uploaded to S3 successfully"
else
  echo "Log file not found"
fi
