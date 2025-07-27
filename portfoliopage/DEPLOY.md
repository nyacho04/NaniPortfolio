# 🚀 Deploy to GitHub Pages

## Configuración Automática (Recomendado)

El proyecto está configurado para deploy automático usando GitHub Actions.

### Pasos:

1. **Push al repositorio**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Actions se ejecutará automáticamente** y desplegará en:
   ```
   https://nyacho04.github.io/NaniPortfolio
   ```

## Configuración Manual

Si prefieres hacer deploy manualmente:

### 1. Build del proyecto:
```bash
npm run build
```

### 2. Deploy a GitHub Pages:
```bash
npm run deploy
```

## Configuración en GitHub

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `gh-pages` (se creará automáticamente)
5. Folder: `/ (root)`

## URLs

- **Live Site**: https://nyacho04.github.io/NaniPortfolio
- **Repository**: https://github.com/nyacho04/NaniPortfolio

## Troubleshooting

### Si el deploy no funciona:
1. Verifica que el workflow se ejecutó en Actions
2. Asegúrate de que la rama `gh-pages` se creó
3. Revisa los logs en GitHub Actions

### Si las rutas no funcionan:
- El proyecto usa rutas relativas, debería funcionar correctamente
- Si hay problemas, verifica la configuración de `homepage` en `package.json` 