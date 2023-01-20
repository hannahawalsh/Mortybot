# MortyBot
A GPT-3 powered chat bot that has been fine tuned on Consumer Financial Protection Bureau question and answers. Provides users with simple explanations on common mortgage jargon and helps answer common complex questions.

## Requirements

This project uses Python 3+. Using the [Anaconda](https://anaconda.org/anaconda/python) distribution of Python will provide you with most of the packages required.
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install these dependencies. You may use the -U flag e.g. _pip -U install package_ to also update to the newest version.

```bash
# Variety of natural language task, provides the model for our main functionality.
pip install openai
# Data manipulation and analysis
pip install pandas
# Working with arrays and numeric data
pip install numpy
# Transformers provides thousands of pretrained models to perform tasks on different modalities such as text, vision, and audio.
pip install transformers
# Fast BPE tokeniser for use with OpenAI's models.
pip install tiktoken
# Webscraping library
pip install bs4 
```

## How-to use the Chatbot web application

Angular must be installed

Open file LoanDenialGPT/src/app/services/openapi.service.ts
Replace api key with your own api key from OpenAI

```bash
cd LoanDenialGPT
npm install
ng serve
```
Navigate to http://localhost:4200 in your browser

## How-to use the Chatbot notebook

In this [Demo Notebook](https://github.com/hannahawalsh/MortyBot/blob/main/question_answer_with_embeddings.ipynb)

Run all of the cells
Can use the widget at the bottom to ask questions.
