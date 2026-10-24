# JEFE Digital — site web de départ

## Fichiers
- `index.html` : le site complet, adapté au téléphone et à l’ordinateur.
- `README.md` : ces instructions.

## WhatsApp
Le site utilise le numéro marocain **0699332502**, au format international `212699332502`.

Dans la section Contact, il y a deux boutons :
- **WhatsApp Business** : tente d’ouvrir WhatsApp Business sur Android.
- **WhatsApp classique** : ouvre le lien universel WhatsApp.

Remarque : un site web ne peut pas garantir quelle application Android s’ouvre si le téléphone a défini WhatsApp classique comme application par défaut. Si le bouton Business ouvre encore WhatsApp classique sur ton Redmi :
1. Ouvre **Paramètres** du téléphone.
2. Va dans **Applications** > **Gérer les applications** > **WhatsApp** (l’application classique).
3. Dans **Ouvrir par défaut** / **Définir par défaut**, efface les paramètres par défaut si cette option existe.
4. Réessaie le bouton **WhatsApp Business** sur le site. Vérifie que WhatsApp Business est bien installé et activé.

## Publier ou remettre le site sur GitHub Pages
1. Décompresse le ZIP sur ton téléphone, si tu utilises le ZIP.
2. Ouvre le dépôt GitHub : `https://github.com/mouh7229-afk/Jefe-Digital`
3. Si le dépôt est vide, clique sur **Add file** > **Upload files**. Si ce bouton n’apparaît pas, ouvre : `https://github.com/mouh7229-afk/Jefe-Digital/upload/main`
4. Téléverse **`index.html`** (pas le ZIP). Tu peux aussi téléverser `README.md`.
5. Clique sur **Commit changes**.
6. Ouvre **Settings** > **Pages**. Sous **Build and deployment**, choisis **Deploy from a branch**, branche `main`, dossier `/(root)`, puis **Save**.
7. Attends quelques minutes et ouvre : `https://mouh7229-afk.github.io/Jefe-Digital/`

Si le dépôt est vide ou si l’ancien `index.html` a été supprimé, ce n’est pas grave : téléverse simplement ce nouveau `index.html`.

## Modifier le numéro plus tard
Dans `index.html`, cherche `212699332502` et remplace-le par le numéro international voulu, sans `+`, espaces ni zéro initial. Exemple : `06XXXXXXXX` devient `2126XXXXXXXX`.

## À savoir
- C’est un site vitrine statique. Il n’a pas de base de données, de paiement en ligne ou de gestion de stock.
- Les prix affichés sont indicatifs : confirme le contenu et le prix avec chaque client.
- Un nom de domaine personnalisé est facultatif ; laisse **Custom domain** vide pour l’instant.
