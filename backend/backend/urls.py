from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from stocks.views import *

router = DefaultRouter()
router.register(r'stocks', StockViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', home, name="home")
]
