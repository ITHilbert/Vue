# Vue

Hier erstelle ich meine Vue.js Komponenten


## Installation
```
php artisan vendor:publish --provider="ITHilbert\Vue\VueServiceProvider --force"
```

### config/app.php
Den Punkt Providers um folgenden Eintrag ergänzen:
```
\ITHilbert\Vue\VueServiceProvider::class,
```

### Anwendung
```
npm run prod
```

### HTML Anpassung, damit es läuft
```
<div class="#vue-app">
... Inhalt ...
</div>
```

### ToDo


### Author
IT-Hilbert GmbH

Access, Excel, VBA und Web Programmierungen

Homepage: [IT-Hilbert.com](https://www.IT-Hilbert.com) 
