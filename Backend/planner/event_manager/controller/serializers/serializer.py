from rest_framework import serializers
from event_manager.models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            'id',
            'title',
            'description',
            'from_date',
            'from_time',
            'to_date',
            'to_time'
        )
