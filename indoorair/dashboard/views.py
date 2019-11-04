
from django.shortcuts import render
from django.http import JsonResponse

def dashboard_page(request):
  return render(request, "dashboard/dashboard.html",{},)

def get_dashboard_api(request):

  temp_avg = request.POST.get("temp_avg")
  press_avg = request.POST.get("press_avg")
  co2_avg = request.POST.get("co2_avg")
  tvoc_avg = request.POST.get("tvoc_avg")
  humid_avg = request.POST.get("humid_avg")
  # This is for debugging purposes only.

  return JsonResponse({
       "avg_temp": 0,
       "avg_press":0,
       "avg_co2":0,
       "avg_tvoc":0,
       "avg_humid":0,

  })
