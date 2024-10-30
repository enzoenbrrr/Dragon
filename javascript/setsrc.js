fetch("../src/JSON/status.json")
    .then(got => got.json())
    .finally(got => document.getElementById('info-bulle').innerHTML = got["status"])