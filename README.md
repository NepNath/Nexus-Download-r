
# Nexus Download'r
[![Download](https://img.shields.io/badge/Download-Project-purple)](https://github.com/NepNath/Nexus-Download-r/releases/download/latest/Nexus-Download-r-main.zip)

## Description
Nexus Download'r est une extension de navigateur fonctionnant sous chromium conçue pour faciliter le téléchargement de vidéos et d'audios depuis YouTube. Elle permet aux utilisateurs de télécharger des médias directement via leur navigateur sans passer par des sites externes sous le format `.webm` avec une facilité accrue.

## Fonctionnalités
- Téléchargement de vidéos en format mp4 et d'audio en format webm.
- Interface utilisateur intuitive et simple a comprendre.

## Configuration Requise
- Google Chrome ou tout navigateur basé sur Chromium.
- Accès à Internet pour récupérer les vidéos depuis YouTube.
- Serveur local lancé (server.js) (*v1.0 de l'extension*)
- Node.js installé sur votre machine (*v1.0 de l'extension*) ([télécharger Node.js](https://nodejs.org/dist/v20.14.0/node-v20.14.0-x64.msi))

## Installation
Pour installer cette extension dans votre navigateur Chrome, suivez ces étapes :

1. Clonez le dépôt ou téléchargez le ZIP de ce projet.
2. Extrayez le dossier si vous avez téléchargé le ZIP, dans un endroit facile d'accès pour faciliter l'utilisation.
3. Ouvrez votre navigateur et allez dans `chrome://extensions/`.
4. Activez le mode développeur.
5. Cliquez sur "Charger l'extension non empaquetée" et sélectionnez le dossier de l'extension extrait.
6. L'extension doit maintenant apparaître dans votre barre d'outils de navigateur.

## Utilisation
Pour utiliser Nexus Download'r, procédez comme suit :

1. Lancez le server local en utilisant Node.js avec la commande suivante, via un terminal (*suivre étapes dans [Installation serveur](#installation-serveur) si nécessaire*). (*v1.0 de l'extension*)
1. Naviguez sur YouTube et ouvrez la vidéo que vous souhaitez télécharger.
2. Cliquez sur l'icône de Nexus Download'r dans la barre d'outils de votre navigateur pour ouvrir la popup.
3. Cliquez sur le bouton correspondant au format que vous souhaitez télécharger.
4. La vidéo sera téléchargée après un court moment dans le **dossier du projet**.

## Installation Serveur

### Powershell
Pour lancer le serveur local, suivez ces étapes si vous utilisez powershell :

en premier, naviguez jusqu'au dossier du projet :

```bash
cd chemin/vers/le/dossier/du/projet
```
![path2folder](IMG/path2folder.png)

une fois dedans, exécuter la commande suivante pour lancer le serveur local :

```bash
node ./server.js
``` 

![server-launch](IMG/server%20run.png)


### VSCode Terminal

Pour lancer le serveur local, suivez ces étapes si vous utilisez le terminal intégré de VSCode :

en premier, ouvrez le dossier du projet dans VSCode et ensuite vous n'avez plus qu'a lancer le server avec la commande suivante :

```bash
node ./server.js
``` 

![VScode-start](IMG/VSlaunch.png)

**une fois que le message `server running on port 4000` s'affiche, le serveur est lancé et prêt à être utilisé. *(v1.0 de l'extension*)**

## Crédits
- API de téléchargement utilisant `youtube-dl`.

## Contact

En cas de problème ou de suggestion, vous pouvez me contacter via discord  : 
![Discord](IMG/nepdiscord.png)