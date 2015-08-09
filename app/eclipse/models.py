from google.appengine.ext import ndb

class Note(ndb.Model):
	note_text = ndb.StringProperty()
	note_done = ndb.BooleanProperty()
