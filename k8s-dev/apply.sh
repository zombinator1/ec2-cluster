#!/bin/bash

#kubectl apply -f ./base/front.yaml
kubectl apply -k ./base
kubectl port-forward service/frontend-svc 5174:5174
