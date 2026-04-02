# 6330-Design-Project-Artefact
### System Description
Within higher education institutions, the system quantifies student activity by monitoring digital behaviours such as login frequency, click patterns, and the time spent on educational portals (including but not limited to: time spent browsing course content, or completing assignments like quizzes, forum posts). The system collects student data, determines whether certain thresholds apply, then categorises students and provides solutions or support material.

Currently, the system (as I analyse it) is a two-tier system that categorises students as either “engaged” or “at risk”. Depending on the classification, the system is automatically triggered to offer the student support material. There is no required human review of the decision or judgment; the system is trusted to route decisions accurately and appropriately. 

### Artefact Files
- engagement-attributes.json: a file defining the various digital behaviours and metrics used to measure engagement levels.
- before.js: the system being analysed, how it currently exists with no opportunity for human intervention.
- after.js: proposed reconfiguration of the system to include human intervention.