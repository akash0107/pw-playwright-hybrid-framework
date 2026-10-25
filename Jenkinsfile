
pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.64.1-noble'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test --workers=1'
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**,test-results/**',
                allowEmptyArchive: true
            )
        }
    }
}
