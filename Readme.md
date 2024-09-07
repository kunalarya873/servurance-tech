# Stock Manager

A simple full-stack web application to manage a list of stocks. This project uses Django for the backend and vanilla HTML, CSS, and JavaScript for the frontend.

## Features

- Add, view, update, and delete stocks.
- Inline editing of stock entries.
- Basic styling with Bootstrap.

## Getting Started

### Prerequisites

- Python 3.x
- PostgreSQL
- Django
- Django REST framework

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/stock-manager.git
    cd stock-manager
    ```

2. **Create and Activate a Virtual Environment**

    ```bash
    python -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. **Install Dependencies**

    ```bash
    pip install -r requirements.txt
    ```

### Database Configuration

By default, Django uses SQLite as the database backend. To switch to PostgreSQL, follow these steps:

1. **Install PostgreSQL Dependencies**

    Make sure you have PostgreSQL installed on your system. You will also need the `psycopg2` package, which is the PostgreSQL adapter for Python. Install it using pip:

    ```bash
    pip install psycopg2-binary
    ```

2. **Update `settings.py`**

    In your Django project directory, open `stock_manager/settings.py` and locate the `DATABASES` configuration section. By default, it should be set to use SQLite. Uncomment and modify the PostgreSQL configuration as shown below:

    ```python
    # settings.py

    # Uncomment the following lines and update with your PostgreSQL database details

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'your_database_name',
            'USER': 'your_database_user',
            'PASSWORD': 'your_database_password',
            'HOST': 'localhost',  # Set to your PostgreSQL host if not localhost
            'PORT': '5432',       # Default PostgreSQL port
        }
    }
    ```

    Replace `your_database_name`, `your_database_user`, and `your_database_password` with your actual PostgreSQL database credentials.

3. **Migrate the Database**

    Once you have updated the `settings.py` file, create and apply migrations to set up your PostgreSQL database:

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

4. **Create a Superuser**

    Create a superuser to access the Django admin interface:

    ```bash
    python manage.py createsuperuser
    ```

    Follow the prompts to set up the superuser credentials.

### Running the Project

1. **Run the Development Server**

    ```bash
    python manage.py runserver
    ```

2. **Access the Application**

    Open your web browser and go to `http://localhost:8000/` to see the application in action.

3. **Access the Admin Interface**

    Go to `http://localhost:8000/admin/` to access the Django admin interface with the superuser credentials you created.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Bootstrap for styling
- Django REST framework for API functionality
