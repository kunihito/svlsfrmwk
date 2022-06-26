#!/bin/bash

# テーブルを作成
aws dynamodb create-table --cli-input-json file://./json/user.json --endpoint-url http://localhost:8000

# テーブル一覧を表示
aws dynamodb list-tables --endpoint-url http://localhost:8000