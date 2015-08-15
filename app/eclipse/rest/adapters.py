import prestans
import prestans.ext.data.adapters.ndb

import eclipse.models
import eclipse.rest.models

prestans.ext.data.adapters.registry.register_adapter(
    prestans.ext.data.adapters.ndb.ModelAdapter(
        rest_model_class=eclipse.rest.models.Note,
        persistent_model_class=eclipse.models.Note
    )
)