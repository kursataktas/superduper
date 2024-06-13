# ruff: noqa: E402
from .base import config, configs, logger
from .base.superduper import superduper

ICON = '🔮'
CFG = configs.CFG
ROOT = configs.ROOT

logging = logger.Logging

__version__ = '0.1.1'

from superduperdb.backends import ibis, mongodb

from .base.decorators import code
from .base.document import Document
from .components.application import Application
from .components.component import Component
from .components.dataset import Dataset
from .components.datatype import DataType, Encoder
from .components.listener import Listener
from .components.metric import Metric
from .components.model import (
    Model,
    ObjectModel,
    QueryModel,
    Validation,
    model,
)
from .components.schema import Schema
from .components.application import Application
from .components.template import Template
from .components.vector_index import VectorIndex, vector

REQUIRES = [
    'superduperdb=={}'.format(__version__),
]

__all__ = (
    'CFG',
    'ICON',
    'ROOT',
    'config',
    'logging',
    'superduper',
    'DataType',
    'Encoder',
    'Document',
    'code',
    'ObjectModel',
    'QueryModel',
    'Validation',
    'Model',
    'model',
    'Listener',
    'VectorIndex',
    'vector',
    'Dataset',
    'Metric',
    'Schema',
    'Application',
    'mongodb',
    'ibis',
    'Template',
    'Application',
    'Component',
)
