pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Automation Test') {
            steps {
                bat 'npx cucumber-js --require-module ts-node/register --require steps/**/*.ts features/**/*.feature'
            }
        }
    }
}
