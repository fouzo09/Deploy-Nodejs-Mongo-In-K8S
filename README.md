## Deployer une API (nodejs + mongoDB) dans un cluster kubernates

#### Instructions
1. Cloner tout d'abord le projet

`git clone https://github.com/fouzo09/Deploy-Nodejs-Mongo-In-K8S.git`

3. Placer vous dans le dossier du projet

  `cd nom_du_dossier`
  
5. Exécutez la commande suivante pour creer le cluster kubernates

`kubectl apply -f ./`

4. Pour verifier les differents objets kubernates crées, executer les dommandes ci-dessous

```
kubectl get pods
kubectl get services
kubectl get pvc
kubectl get secret
```

5. Pour supprimer le cluster, executer la commande: `kubectl delete -f ./`
