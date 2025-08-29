<script setup lang="ts">
const description = ref("Ready Player One - My favorite book and movie");
const announcementDialog = ref(true);

useSeoMeta({
  title: "Ready Player One - Leandro Acosta",
  description,
});
</script>

<template>
  <div>
    <!-- Navigation Bar -->
    <div class="nav-bar">
      <div class="nav-container">
        <div class="row justify-center items-center">
          <q-btn 
            flat 
            no-caps 
            class="nav-btn" 
            icon="person"
            label="Portfolio"
            :to="'/'"
          />
          <q-separator vertical class="q-mx-md nav-separator" />
          <q-btn 
            flat 
            no-caps 
            class="nav-btn active-nav" 
            icon="videogame_asset"
            label="RPO Competition"
            :to="'/rpo'"
          />
        </div>
      </div>
    </div>
    
    <q-page class="q-py-xl column margins page-content">
    
    <!-- Hero Section -->
    <div class="hero-section text-center q-mb-xl">
      <div class="title-container q-mb-md">
        <q-icon name="videogame_asset" size="3rem" color="primary" class="q-mb-sm" />
        <h1 class="text-weight-thin q-pa-none main-title gradient-text">Ready Player One Competition</h1>
        <div class="subtitle-container q-mt-sm">
          <h2 class="text-grey-6 school-subtitle">Pui Ching Middle School (Coloane Campus)</h2>
        </div>
      </div>
      
      <div class="intro-card q-pa-lg q-mt-lg rounded-borders">
        <div class="row justify-center">
          <q-icon name="announcement" size="2rem" color="amber" class="q-mb-md q-mr-md" />
          <h3 class="section-title">35 Questions</h3>
        </div>
        <p class="text-body1 text-weight-medium">
          We are excited to announce the Ready Player One competition, taking place throughout this school year! 
        </p>
        <p class="text-body1">
          This engaging event will feature 35 questions, 
          with one question released each Friday.
        </p>
      </div>
    </div>

    <!-- Competition Details Section -->
    <div class="info-section q-mb-xl">
      <div class="section-header q-mb-md text-center">
        <q-icon name="info" size="1.8rem" color="info" class="q-mr-sm" />
        <h3 class="section-title">Competition Details</h3>
      </div>
      
      <div class="details-grid">
        <q-card class="detail-card q-pa-md" flat bordered>
          <q-icon name="event" size="2rem" color="primary" class="q-mb-sm" />
          <div class="text-weight-medium q-mb-xs">Weekly Format</div>
          <div class="text-grey-7">One question will be posted every Friday</div>
        </q-card>
        
        <q-card class="detail-card q-pa-md" flat bordered>
          <q-icon name="leaderboard" size="2rem" color="positive" class="q-mb-sm" />
          <div class="text-weight-medium q-mb-xs">Weekly Rankings</div>
          <div class="text-grey-7">Participants will be ranked based on performance</div>
        </q-card>
        
        <q-card class="detail-card q-pa-md" flat bordered>
          <q-icon name="emoji_events" size="2rem" color="amber" class="q-mb-sm" />
          <div class="text-weight-medium q-mb-xs">Final Prizes</div>
          <div class="text-grey-7">Exciting prizes will be revealed soon!</div>
        </q-card>
      </div>
    </div>

    <!-- Participation Section -->
    <div class="info-section q-mb-xl">
      <div class="section-header q-mb-md text-center">
        <q-icon name="group" size="1.8rem" color="purple" class="q-mr-sm" />
        <h3 class="section-title">Who Can Participate</h3>
      </div>
      
      <q-card class="participation-card q-pa-lg text-center" flat bordered>
        <div class="participants-row q-mb-md">
          <div class="participant-item">
            <q-avatar size="3rem" color="blue" text-color="white" class="q-mb-sm">
              <q-icon name="school" size="1.5rem" />
            </q-avatar>
            <div class="text-weight-medium">Students</div>
          </div>
          <div class="participant-item">
            <q-avatar size="3rem" color="green" text-color="white" class="q-mb-sm">
              <q-icon name="family_restroom" size="1.5rem" />
            </q-avatar>
            <div class="text-weight-medium">Parents</div>
          </div>
          <div class="participant-item">
            <q-avatar size="3rem" color="orange" text-color="white" class="q-mb-sm">
              <q-icon name="person" size="1.5rem" />
            </q-avatar>
            <div class="text-weight-medium">Teachers</div>
          </div>
        </div>
        <p class="text-grey-7">Everyone is encouraged to join in the fun and challenge themselves!</p>
      </q-card>
    </div>

    <!-- Scoring System Section -->
    <div class="info-section q-mb-xl">
      <div class="section-header q-mb-md text-center">
        <q-icon name="score" size="1.8rem" color="red" class="q-mr-sm" />
        <h3 class="section-title">Scoring System</h3>
      </div>
      
      <div class="scoring-container">
        <q-card class="score-card q-pa-lg q-mb-md" flat bordered>
          <div class="score-header q-mb-md">
            <q-icon name="check_circle" size="3rem" color="primary" />
            <div class="score-points">80</div>
            <div class="score-label">Points</div>
          </div>
          <div class="score-description">Awarded for each correct answer</div>
        </q-card>
        
        <q-card class="score-card q-pa-lg q-mb-md" flat bordered>
          <div class="score-header q-mb-md">
            <q-icon name="flash_on" size="3rem" color="positive" />
            <div class="score-points bonus-points">50</div>
            <div class="score-label">Bonus Points</div>
          </div>
          <div class="score-description">Given to the participant who submits the first correct answer</div>
        </q-card>
        
        <q-card class="score-card q-pa-lg q-mb-md" flat bordered>
          <div class="score-header q-mb-md">
            <q-icon name="schedule" size="3rem" color="orange" />
            <div class="score-points extra-points">20</div>
            <div class="score-label">Extra Points</div>
          </div>
          <div class="score-description">Earned if the answer is correct and submitted in the first week</div>
        </q-card>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="cta-section text-center q-pa-lg rounded-borders">
      <q-icon name="rocket_launch" size="2.5rem" color="primary" class="q-mb-md" />
      <p class="text-h6 text-weight-medium text-primary q-mb-sm">
        Ready to Join the Adventure?
      </p>
      <p class="text-body1 text-grey-7">
        We look forward to seeing everyone participate and make this competition a thrilling experience!
      </p>
    </div>

    </q-page>

    <!-- Announcement Dialog -->
    <q-dialog v-model="announcementDialog" @click="announcementDialog = false">
      <q-card class="announcement-dialog-card q-pa-lg text-center" style="min-width: 350px" @click="announcementDialog = false">
        <q-card-section>
          <div class="announcement-content">
            <q-icon name="schedule" size="1.5rem" color="orange" class="q-mr-sm" />
            <div class="text-h6 text-weight-medium q-mb-sm">
              Competition Starts Soon!
            </div>
            <div class="text-body1 announcement-message">
              First question at Friday 17pm, September 06
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<style>
/* Typography */
h1 {
  font-size: 2.5em;
  margin: 0;
  line-height: 1.2;
}

h2 {
  font-size: 1.5em;
  margin: 0;
  line-height: 1.2;
}

h3 {
  font-size: 1.2em;
  margin: 0;
  line-height: 1.2;
  color: #1976d2;
}

.margins {
  max-width: 600px;
  margin: 0 auto;
}

/* Navigation Bar Styles */
.nav-bar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.75rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-btn {
  color: #666;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.nav-btn:hover {
  background: rgba(25, 118, 210, 0.1);
  color: #1976d2;
}

.active-nav {
  background: rgba(25, 118, 210, 0.15) !important;
  color: #1976d2 !important;
}

.nav-separator {
  opacity: 0.3;
}

.page-content {
  margin-top: 1rem;
}

/* Dark Mode Support */
body.body--dark .nav-bar {
  background: rgba(18, 18, 18, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

body.body--dark .nav-btn {
  color: #bbb;
}

body.body--dark .nav-btn:hover {
  background: rgba(25, 118, 210, 0.2);
  color: #42a5f5;
}

body.body--dark .active-nav {
  background: rgba(25, 118, 210, 0.25) !important;
  color: #42a5f5 !important;
}

body.body--dark .nav-separator {
  opacity: 0.2;
}

/* Hero Section */
.hero-section {
  position: relative;
}

.main-title {
  font-size: 2.8rem;
  margin: 0.5rem 0;
}

.gradient-text {
  background: linear-gradient(45deg, #1976d2, #42a5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.school-subtitle {
  display: inline-flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 0;
}

.intro-card {
  background: rgba(25, 118, 210, 0.1);
  border: 1px solid rgba(25, 118, 210, 0.3);
  backdrop-filter: blur(10px);
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  font-size: 1.4rem;
  margin: 0;
  color: inherit;
}

/* Competition Details Grid */
.details-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .details-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.detail-card {
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
}

.detail-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Participation Section */
.participation-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(76, 175, 80, 0.05) !important;
}

.participants-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.participant-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
}

/* Scoring System */
.scoring-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .scoring-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.score-card {
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  position: relative;
  overflow: hidden;
}

.score-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.score-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-points {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1976d2;
  margin: 0.5rem 0;
}

.bonus-points {
  color: #4caf50;
}

.extra-points {
  color: #ff9800;
}

.score-label {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
}

.score-description {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #999;
}

/* Call to Action */
.cta-section {
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(66, 165, 245, 0.1));
  border: 1px solid rgba(25, 118, 210, 0.3);
  backdrop-filter: blur(10px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .margins {
    max-width: 100%;
    padding: 0 0.75rem;
  }

  /* Hero Section Mobile */
  .hero-section {
    margin-bottom: 2rem;
  }

  .main-title {
    font-size: 1.8rem;
    line-height: 1.2;
    margin: 0.5rem 0;
  }

  .school-subtitle {
    font-size: 1rem;
    text-align: center;
  }

  .intro-card {
    padding: 1rem;
    margin-top: 1.5rem;
  }

  /* Section Headers Mobile */
  .section-header {
    margin-bottom: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  /* Info Sections Mobile */
  .info-section {
    margin-bottom: 2rem;
  }

  /* Details Grid Mobile */
  .details-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .detail-card {
    padding: 1.5rem 1rem;
  }

  /* Participation Mobile */
  .participation-card {
    padding: 1.5rem 1rem;
  }

  .participants-row {
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .participant-item {
    min-width: auto;
    flex: 1;
  }

  .participant-item .q-avatar {
    width: 2.5rem;
    height: 2.5rem;
  }

  .participant-item .text-weight-medium {
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }

  /* Scoring System Mobile */
  .scoring-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .score-card {
    padding: 1.5rem 1rem;
  }

  .score-points {
    font-size: 2rem;
  }

  .score-label {
    font-size: 0.9rem;
  }

  .score-description {
    font-size: 0.85rem;
    line-height: 1.3;
  }

  /* Call to Action Mobile */
  .cta-section {
    padding: 1.5rem 1rem;
    margin-top: 2rem;
  }

  .cta-section .text-h6 {
    font-size: 1.1rem;
  }

  .cta-section .text-body1 {
    font-size: 0.9rem;
  }

  /* Typography Mobile Improvements */
  h1, h2, h3 {
    text-align: center;
  }

  .text-body1 {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  /* Icon Adjustments for Mobile */
  .q-icon {
    margin-bottom: 0.5rem !important;
  }

  .section-header .q-icon {
    margin-right: 0 !important;
    margin-bottom: 0.25rem !important;
  }
}

/* Extra Small Devices */
@media (max-width: 480px) {
  .margins {
    padding: 0 0.5rem;
  }

  .main-title {
    font-size: 1.6rem;
  }

  .school-subtitle {
    font-size: 0.9rem;
  }

  .intro-card {
    padding: 0.75rem;
  }

  .detail-card, .score-card, .participation-card {
    padding: 1rem 0.75rem;
  }

  .participants-row {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .participant-item {
    min-width: 80px;
  }

  .score-points {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .cta-section {
    padding: 1rem 0.75rem;
  }
}

/* Announcement Dialog Styles */
.announcement-dialog-card {
  border-radius: 12px;
  border: 1px solid rgba(25, 118, 210, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.announcement-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.announcement-content {
  background: rgba(25, 118, 210, 0.05);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(25, 118, 210, 0.15);
}

.announcement-message {
  font-weight: 500;
  color: #1976d2;
  font-size: 1.1rem;
}

/* Dark Mode Support for Dialog */
body.body--dark .announcement-dialog-card {
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.95), rgba(40, 40, 40, 0.9));
  border: 1px solid rgba(66, 165, 245, 0.3);
}

body.body--dark .announcement-content {
  background: rgba(66, 165, 245, 0.1);
  border: 1px solid rgba(66, 165, 245, 0.2);
}

body.body--dark .announcement-message {
  color: #42a5f5;
}

/* Mobile Responsive for Dialog */
@media (max-width: 480px) {
  .announcement-dialog-card {
    margin: 1rem;
    min-width: auto !important;
    width: calc(100vw - 2rem);
  }
  
  .announcement-message {
    font-size: 1rem;
  }
}
</style>
