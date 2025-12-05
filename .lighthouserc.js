module.exports = {
  "ci": {
    "collect": {
      "numberOfRuns": 1,
      "url": [
        "https://compl-alim.beta.gouv.fr/accueil/",
        "https://compl-alim.beta.gouv.fr/entreprises",
        "https://compl-alim.beta.gouv.fr/resultats?q=Test",
        "https://compl-alim.beta.gouv.fr/accessibilite"
      ]
    },
    "assert": {
      "assertions": {
        "categories:performance": "off",
        "categories:pwa": "off",
        "categories:accessibility": ["error", {
          "minScore": 1
        }]
      }
    }
  }
}
