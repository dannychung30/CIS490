from django.shortcuts import render
from .utils.Reader import Reader

# Create your views here.


def process_csv(request):
    if request.method == 'POST':
        csv_file = request.FILES['csv_file']
        reader = Reader(csv_file)

        return render(request, 'success.html', {
            "data": reader.get_data()
        })
    return render(request, 'upload.html')
