"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1238],{4240:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var t=r(4848),a=r(8453),s=r(9489),o=r(7227),l=r(94);const d={sidebar_label:"Retrieval augmented generation",filename:"retrieval_augmented_generation.md"},i="Retrieval augmented generation",c={id:"use_cases/retrieval_augmented_generation",title:"retrieval_augmented_generation",description:"Configure your production system",source:"@site/content/use_cases/retrieval_augmented_generation.md",sourceDirName:"use_cases",slug:"/use_cases/retrieval_augmented_generation",permalink:"/docs/use_cases/retrieval_augmented_generation",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/use_cases/retrieval_augmented_generation.md",tags:[],version:"current",frontMatter:{sidebar_label:"Retrieval augmented generation",filename:"retrieval_augmented_generation.md"},sidebar:"tutorialSidebar",previous:{title:"Multimodal vector search - Video",permalink:"/docs/use_cases/multimodal_vector_search_video"},next:{title:"Text Vector Search",permalink:"/docs/use_cases/text_vector_search"}},u={},p=[{value:"Configure your production system",id:"configure-your-production-system",level:2},{value:"Start your cluster",id:"start-your-cluster",level:2},{value:"Connect to SuperDuperDB",id:"connect-to-superduperdb",level:2},{value:"Get useful sample data",id:"get-useful-sample-data",level:2},{value:"Insert simple data",id:"insert-simple-data",level:2},{value:"Apply a chunker for search",id:"apply-a-chunker-for-search",level:2},{value:"Select outputs of upstream listener",id:"select-outputs-of-upstream-listener",level:2},{value:"Build text embedding model",id:"build-text-embedding-model",level:2},{value:"Create vector-index",id:"create-vector-index",level:2},{value:"Create Vector Search Model",id:"create-vector-search-model",level:2},{value:"Build LLM",id:"build-llm",level:2},{value:"Answer question with LLM",id:"answer-question-with-llm",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"retrieval-augmented-generation",children:"Retrieval augmented generation"}),"\n",(0,t.jsx)(n.h2,{id:"configure-your-production-system",children:"Configure your production system"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'If you would like to use the production features\nof SuperDuperDB, then you should set the relevant\nconnections and configurations in a configuration\nfile. Otherwise you are welcome to use "development" mode\nto get going with SuperDuperDB quickly.'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import os\n\nos.makedirs('.superduperdb', exist_ok=True)\nos.environ['SUPERDUPERDB_CONFIG'] = '.superduperdb/config.yaml'\n"})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB Community",label:"MongoDB Community",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\ndata_backend: mongodb://127.0.0.1:27017/documents\nartifact_store: filesystem://./artifact_store\ncluster:\n  cdc:\n    strategy: null\n    uri: ray://127.0.0.1:20000\n  compute:\n    uri: ray://127.0.0.1:10001\n  vector_search:\n    backfill_batch_size: 100\n    type: in_memory\n    uri: http://127.0.0.1:21000\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"MongoDB Atlas",label:"MongoDB Atlas",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\n        type: native\ndatabackend: mongodb+srv://<user>:<password>@<mongo-host>:27017/documents\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: sqlite://<path-to-db>.db\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mysql://<user>:<password>@<host>:<port>/database\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mssql://<user>:<password>@<host>:<port>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: postgres://<user>:<password>@<host>:<port</<database>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: snowflake://<user>:<password>@<account>/<database>\n'''        \n"})})}),(0,t.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: clickhouse://<user>:<password>@<host>:<port>\n'''        \n"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"with open(os.environ['SUPERDUPERDB_CONFIG'], 'w') as f:\n    f.write(CFG)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-your-cluster",children:"Start your cluster"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Starting a SuperDuperDB cluster is useful in production and model development\nif you want to enable scalable compute, access to the models by multiple users for collaboration,\nmonitoring."}),(0,t.jsx)(n.p,{children:"If you don't need this, then it is simpler to start in development mode."})]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Experimental Cluster",label:"Experimental Cluster",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!python -m superduperdb local-cluster up        \n"})})}),(0,t.jsx)(o.A,{value:"Docker-Compose",label:"Docker-Compose",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!make build_sandbox\n!make testenv_init        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"connect-to-superduperdb",children:"Connect to SuperDuperDB"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'Note that this is only relevant if you are running SuperDuperDB in development mode.\nOtherwise refer to "Configuring your production system".'})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('mongodb://localhost:27017/documents')        \n"})})}),(0,t.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\ndb = superduper('sqlite://my_db.db')        \n"})})}),(0,t.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'superduper'\npassword = 'superduper'\nport = 3306\nhost = 'localhost'\ndatabase = 'test_db'\n\ndb = superduper(f\"mysql://{user}:{password}@{host}:{port}/{database}\")        \n"})})}),(0,t.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'sa'\npassword = 'Superduper#1'\nport = 1433\nhost = 'localhost'\n\ndb = superduper(f\"mssql://{user}:{password}@{host}:{port}\")        \n"})})}),(0,t.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install psycopg2\nfrom superduperdb import superduper\n\nuser = 'postgres'\npassword = 'postgres'\nport = 5432\nhost = 'localhost'\ndatabase = 'test_db'\ndb_uri = f\"postgres://{user}:{password}@{host}:{port}/{database}\"\n\ndb = superduper(db_uri, metadata_store=db_uri.replace('postgres://', 'postgresql://'))        \n"})})}),(0,t.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduperdb import superduper\n\nuser = "superduperuser"\npassword = "superduperpassword"\naccount = "XXXX-XXXX"  # ORGANIZATIONID-USERID\ndatabase = "FREE_COMPANY_DATASET/PUBLIC"\n\nsnowflake_uri = f"snowflake://{user}:{password}@{account}/{database}"\n\ndb = superduper(\n    snowflake_uri, \n    metadata_store=\'sqlite:///your_database_name.db\',\n)        \n'})})}),(0,t.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'default'\npassword = ''\nport = 8123\nhost = 'localhost'\n\ndb = superduper(f\"clickhouse://{user}:{password}@{host}:{port}\", metadata_store=f'mongomock://meta')        \n"})})}),(0,t.jsx)(o.A,{value:"DuckDB",label:"DuckDB",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('duckdb://mydb.duckdb')        \n"})})}),(0,t.jsx)(o.A,{value:"Pandas",label:"Pandas",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper(['my.csv'], metadata_store=f'mongomock://meta')        \n"})})}),(0,t.jsx)(o.A,{value:"MongoMock",label:"MongoMock",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('mongomock:///test_db')        \n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json\nimport json\n\nwith open('text.json', 'r') as f:\n    data = json.load(f)        \n"})})}),(0,t.jsx)(o.A,{value:"PDF",label:"PDF",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/pdfs.zip && unzip -o pdfs.zip\nimport os\n\ndata = [f'pdfs/{x}' for x in os.listdir('./pdfs') if x.endswith('.pdf')]        \n"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"datas = [{'x': d} for d in data]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"insert-simple-data",children:"Insert simple data"}),"\n",(0,t.jsx)(n.p,{children:"After turning on auto_schema, we can directly insert data, and superduperdb will automatically analyze the data type, and match the construction of the table and datatype."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import Document\n\ntable_or_collection = db['documents']\n\nids = db.execute(table_or_collection.insert([Document(data) for data in datas]))\nselect = table_or_collection.select()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"apply-a-chunker-for-search",children:"Apply a chunker for search"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Note that applying a chunker is ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"not"})})," mandatory for search.\nIf your data is already chunked (e.g. short text snippets or audio) or if you\nare searching through something like images, which can't be chunked, then this\nwon't be necessary."]})}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import model\n\nCHUNK_SIZE = 200\n\n@model(flatten=True, model_update_kwargs={'document_embedded': False})\ndef chunker(text):\n    text = text.split()\n    chunks = [' '.join(text[i:i + CHUNK_SIZE]) for i in range(0, len(text), CHUNK_SIZE)]\n    return chunks        \n"})})}),(0,t.jsx)(o.A,{value:"PDF",label:"PDF",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install -q \"unstructured[pdf]\"\nfrom superduperdb import model\nfrom unstructured.partition.pdf import partition_pdf\n\nCHUNK_SIZE = 500\n\n@model(flatten=True, model_update_kwargs={'document_embedded': False})\ndef chunker(pdf_file):\n    elements = partition_pdf(pdf_file)\n    text = '\\n'.join([e.text for e in elements])\n    chunks = [text[i:i + CHUNK_SIZE] for i in range(0, len(text), CHUNK_SIZE)]\n    return chunks        \n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Now we apply this chunker to the data by wrapping the chunker in ",(0,t.jsx)(n.code,{children:"Listener"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import Listener\n\nupstream_listener = Listener(\n    model=chunker,\n    select=select,\n    key='x',\n    uuid=\"chunk\",\n)\n\ndb.apply(upstream_listener)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"select-outputs-of-upstream-listener",children:"Select outputs of upstream listener"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This is useful if you have performed a first step, such as pre-computing\nfeatures, or chunking your data. You can use this query to\noperate on those outputs."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"indexing_key = upstream_listener.outputs_key\nselect = upstream_listener.outputs_select\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-text-embedding-model",children:"Build text embedding model"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"OpenAI",label:"OpenAI",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install openai\nfrom superduperdb.ext.openai import OpenAIEmbedding\nmodel = OpenAIEmbedding(identifier='text-embedding-ada-002')        \n"})})}),(0,t.jsx)(o.A,{value:"JinaAI",label:"JinaAI",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\nfrom superduperdb.ext.jina import JinaEmbedding\n\nos.environ["JINA_API_KEY"] = "jina_xxxx"\n \n# define the model\nmodel = JinaEmbedding(identifier=\'jina-embeddings-v2-base-en\')        \n'})})}),(0,t.jsx)(o.A,{value:"Sentence-Transformers",label:"Sentence-Transformers",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'!pip install sentence-transformers\nfrom superduperdb import vector\nimport sentence_transformers\nfrom superduperdb.ext.sentence_transformers import SentenceTransformer\n\nmodel = SentenceTransformer(\n    identifier="embedding",\n    object=sentence_transformers.SentenceTransformer("BAAI/bge-small-en"),\n    datatype=vector(shape=(1024,)),\n    postprocess=lambda x: x.tolist(),\n    predict_kwargs={"show_progress_bar": True},\n)        \n'})})}),(0,t.jsx)(o.A,{value:"Transformers",label:"Transformers",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import dataclasses as dc\nfrom superduperdb import vector\nfrom superduperdb.components.model import Model, ensure_initialized, Signature\nfrom transformers import AutoTokenizer, AutoModel\nimport torch\n\n@dc.dataclass(kw_only=True)\nclass TransformerEmbedding(Model):\n    signature: Signature = 'singleton'\n    pretrained_model_name_or_path : str\n\n    def init(self):\n        self.tokenizer = AutoTokenizer.from_pretrained(self.pretrained_model_name_or_path)\n        self.model = AutoModel.from_pretrained(self.pretrained_model_name_or_path)\n        self.model.eval()\n\n    @ensure_initialized\n    def predict(self, x):\n        return self.predict([x])[0]\n        \n    @ensure_initialized\n    def predict(self, dataset):\n        encoded_input = self.tokenizer(dataset, padding=True, truncation=True, return_tensors='pt')\n        # Compute token embeddings\n        with torch.no_grad():\n            model_output = self.model(**encoded_input)\n            # Perform pooling. In this case, cls pooling.\n            sentence_embeddings = model_output[0][:, 0]\n        # normalize embeddings\n        sentence_embeddings = torch.nn.functional.normalize(sentence_embeddings, p=2, dim=1)\n        return sentence_embeddings.tolist()\n\n\nmodel = TransformerEmbedding(identifier=\"embedding\", pretrained_model_name_or_path=\"BAAI/bge-small-en\", datatype=vector(shape=(384, )))        \n"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print(len(model.predict("What is SuperDuperDB")))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"create-vector-index",children:"Create vector-index"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import VectorIndex, Listener\n\nvector_index_name = 'vector-index'\n\njobs, _ = db.add(\n    VectorIndex(\n        vector_index_name,\n        indexing_listener=Listener(\n            key=indexing_key,      # the `Document` key `model` should ingest to create embedding\n            select=select,       # a `Select` query telling which data to search over\n            model=model,         # a `_Predictor` how to convert data to embeddings\n            uuid=\"embedding\"\n        )\n    )\n)\nquery_table_or_collection = select.table_or_collection\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'query = "Tell me about the SuperDuperDB"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"create-vector-search-model",children:"Create Vector Search Model"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb.base.variables import Variable\nitem = {indexing_key: Variable('query')}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduperdb.components.model import QueryModel\n\nvector_search_model = QueryModel(\n    identifier="VectorSearch",\n    select=query_table_or_collection.like(item, vector_index=vector_index_name, n=5).select(),\n    # The _source is the identifier of the upstream data, which can be used to locate the data from upstream sources using `_source`.\n    postprocess=lambda docs: [{"text": doc[indexing_key], "_source": doc["_source"]} for doc in docs],\n    db=db\n)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"vector_search_model.predict(query=query)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-llm",children:"Build LLM"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"OpenAI",label:"OpenAI",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install openai\nfrom superduperdb.ext.openai import OpenAIChatCompletion\n\nllm = OpenAIChatCompletion(identifier='llm', model='gpt-3.5-turbo')        \n"})})}),(0,t.jsx)(o.A,{value:"Anthropic",label:"Anthropic",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'!pip install anthropic\nfrom superduperdb.ext.anthropic import AnthropicCompletions\nimport os\n\nos.environ["ANTHROPIC_API_KEY"] = "sk-xxx"\n\npredict_kwargs = {\n    "max_tokens": 1024,\n    "temperature": 0.8,\n}\n\nllm = AnthropicCompletions(identifier=\'llm\', model=\'claude-2.1\', predict_kwargs=predict_kwargs)        \n'})})}),(0,t.jsx)(o.A,{value:"vLLM",label:"vLLM",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'!pip install vllm\nfrom superduperdb.ext.vllm import VllmModel\n\npredict_kwargs = {\n    "max_tokens": 1024,\n    "temperature": 0.8,\n}\n\n\nllm = VllmModel(\n    identifier="llm",\n    model_name="TheBloke/Mistral-7B-Instruct-v0.2-AWQ",\n    vllm_kwargs={\n        "gpu_memory_utilization": 0.7,\n        "max_model_len": 1024,\n        "quantization": "awq",\n    },\n    predict_kwargs=predict_kwargs,\n)        \n'})})}),(0,t.jsx)(o.A,{value:"Transformers",label:"Transformers",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'!pip install transformers datasets bitsandbytes accelerate\nfrom superduperdb.ext.transformers import LLM\n\nllm = LLM.from_pretrained("mistralai/Mistral-7B-Instruct-v0.2", load_in_8bit=True, device_map="cuda", identifier="llm", predict_kwargs=dict(max_new_tokens=128))        \n'})})}),(0,t.jsx)(o.A,{value:"Llama.cpp",label:"Llama.cpp",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'!pip install llama_cpp_python\n# !huggingface-cli download TheBloke/Mistral-7B-Instruct-v0.2-GGUF mistral-7b-instruct-v0.2.Q4_K_M.gguf --local-dir . --local-dir-use-symlinks False\n\nfrom superduperdb.ext.llamacpp.model import LlamaCpp\nllm = LlamaCpp(identifier="llm", model_name_or_path="mistral-7b-instruct-v0.2.Q4_K_M.gguf")        \n'})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# test the llm model\nllm.predict("Tell me about the SuperDuperDB")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"answer-question-with-llm",children:"Answer question with LLM"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from superduperdb import model\nfrom superduperdb.components.graph import Graph, input_node\n\nprompt_template = (\n    "Use the following context snippets, these snippets are not ordered!, Answer the question based on this context.\\n"\n    "{context}\\n\\n"\n    "Here\'s the question: {query}"\n)\n\n\n@model\ndef build_prompt(query, docs):\n    chunks = [doc["text"] for doc in docs]\n    context = "\\n\\n".join(chunks)\n    prompt = prompt_template.format(context=context, query=query)\n    return prompt\n    \n\n# We build a graph to handle the entire pipeline\n\n# create a input node, only have one input parameter `query`\nin_ = input_node(\'query\')\n# pass the query to the vector search model\nvector_search_results = vector_search_model(query=in_)\n# pass the query and the search results to the prompt builder\nprompt = build_prompt(query=in_, docs=vector_search_results)\n# pass the prompt to the llm model\nanswer = llm(prompt)\n# create a graph, and the graph output is the answer\nrag = answer.to_graph("rag")\nprint(rag.predict(query)[0])\n'})}),"\n",(0,t.jsx)(n.p,{children:"By applying the RAG model to the database, it will subsequently be accessible for use in other services."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db.add(rag)\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can now load the model elsewhere and make predictions using the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'rag = db.load("model", \'context_llm\')\nprint(rag.predict("Tell me about the SuperDuperDB")[0])\n'})}),"\n",(0,t.jsx)(l.A,{filename:"retrieval_augmented_generation.md"})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(6540);const a=e=>{const n=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",n);const r=`_${e.replace(/\.md$/,".ipynb")}`,t=encodeURIComponent(r);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${t}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then((e=>e.blob())).then((e=>{const n=window.URL.createObjectURL(e),t=document.createElement("a");t.style.display="none",t.href=n,t.download=r,document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(n),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(n))};var s=r(4848);const o=e=>{let{filename:n}=e;if(!n)return console.error("Filename is not provided or invalid."),null;const[r,o]=(0,t.useState)(!1),l={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,s.jsx)("button",{style:r?{...l,backgroundColor:"#B0E000"}:l,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>a(n),children:"Generate notebook from all selected tabs"})}},7227:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(870);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(6540),a=r(870),s=r(4245),o=r(6347),l=r(6494),d=r(2814),i=r(5167),c=r(1269);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[o,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[i,u]=m({queryString:r,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=i??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=r(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function _(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),a=l[r].value;a!==t&&(i(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(_,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function j(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);