
from django.shortcuts import render
from django.http import JsonResponse

def dashboard_page(request):
  return render(request, "dashboard/dashboard.html",{},)

def dashboard_api(request):

  temp_avg = request.POST.get("temp")
  press_avg = request.POST.get("press")
  co2_avg = request.POST.get("co2")
  tvoc_avg = request.POST.get("tvoc")
  humid_avg = request.POST.get("humid")
  # This is for debugging purposes only.
  
  return JsonResponse({
       "temp_avg": temp_avg,
       "press_avg":press_avg,
       "co2_avg":co2_avg,
       "tvoc_avg":tvoc_avg,
       "humid_avg":humid_avg,

  })
