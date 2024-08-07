# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Collect static files
RUN python portfolio/manage.py collectstatic --noinput

# Make port 8000 available to the world outside this container
EXPOSE 8001

# Define environment variable
ENV DJANGO_SETTINGS_MODULE=portfolio.settings

# Run gunicorn server
CMD ["gunicorn", "portfolio.wsgi:application", "--bind", "0.0.0.0:8001"]
