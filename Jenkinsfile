pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'node --version'
            }
        }

        stage('test') {
            steps {
                bat 'echo testando...'
            }
        }

        stage('deploy') {
            steps {
                bat 'echo deploying'
            }
        }
    }
}