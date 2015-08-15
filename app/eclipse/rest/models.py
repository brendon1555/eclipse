import prestans.types

class Note(prestans.types.Model):
    note_text = prestans.types.String(required=True)
    note_done = prestans.types.Boolean(required=True, default=False)