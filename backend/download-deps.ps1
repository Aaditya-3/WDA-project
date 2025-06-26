$url = "https://repo1.maven.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper-3.2.0.jar"
$output = ".mvn\wrapper\maven-wrapper.jar"

New-Item -ItemType Directory -Force -Path ".mvn\wrapper"
Invoke-WebRequest -Uri $url -OutFile $output

$wrapperUrl = "https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.5/apache-maven-3.9.5-bin.zip"
$wrapperProps = @"
distributionUrl=$wrapperUrl
wrapperUrl=$url
"@

Set-Content -Path ".mvn\wrapper\maven-wrapper.properties" -Value $wrapperProps

$mvnw = @"
#!/bin/sh
# ----------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# Maven Start Up Batch script
# ----------------------------------------------------------------------------

MAVEN_PROJECTBASEDIR=`dirname "$0"`

exec java -jar ".mvn/wrapper/maven-wrapper.jar" %*
"@

Set-Content -Path "mvnw" -Value $mvnw

$mvnwCmd = @"
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Maven Start Up Batch script
@REM ----------------------------------------------------------------------------

@echo off
java -jar .mvn/wrapper/maven-wrapper.jar %*
"@

Set-Content -Path "mvnw.cmd" -Value $mvnwCmd 