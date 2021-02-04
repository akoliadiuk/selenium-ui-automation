# Simple automation testing project for wibbitz.com
How to use:
- Install packages: ``npm install``
- Run test: ``cucumber-js --require-module @babel/register --require-module @babel/polyfill test/features/view.clip.feature``

*Note*: in order to run the test you need two environment variables to be set:
- EMAIL- your email to log in to wibbitz.com
- PASSWORD- your password to log in to wibbitz.com