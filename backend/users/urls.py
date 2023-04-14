from django.urls import path
from .views import ReigsterView,RetrieveUserView

urlpatterns = [
    path('register', ReigsterView.as_view()),
    path('me', RetrieveUserView.as_view()),
]
