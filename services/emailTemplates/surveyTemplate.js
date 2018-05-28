const keys = require('../../config/keys')

module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Me gustaría tu opinión!</h3>
                    <p>Por favor responde la siguiente pregunta:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Si</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
}