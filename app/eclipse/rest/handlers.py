import prestans.rest

import eclipse.rest.models
import eclipse.rest.adapters

note_filter = prestans.parser.AttributeFilter.from_model(model_instance=eclipse.rest.models.Note(), default_value=False)
note_filter.note_text = True

class Collection(prestans.rest.RequestHandler):

    __parser_config__ = prestans.parser.Config(
        GET=prestans.parser.VerbConfig(
            response_attribute_filter_default_value=True,
            response_template=prestans.types.Array(element_template=eclipse.rest.models.Note())
        ),
        POST=prestans.parser.VerbConfig(
            body_template=eclipse.rest.models.Note(),
            request_attribute_filter=note_filter,
            response_template=None
        )
    )

    def get(self):
        notes = eclipse.models.Note.query()

        self.response.body = prestans.ext.data.adapters.ndb.adapt_persistent_collection(
            notes,
            eclipse.rest.models.Note
        )
        self.response.status = prestans.http.STATUS.OK

    def post(self):
        request = self.request.parsed_body
        note = eclipse.models.Note(
            note_text = request.note_text
        )
        note.put()
        self.response.status = prestans.http.STATUS.NO_CONTENT