export enum Options { entity = 'entity', tier = 'tier', curd = 'curd' };
export type OptionsKey = { [k in Options]?: boolean };

/*
  数据类型:
  int decimal(10,0) date datetime timestamp time year char(1) varchar(255) text tinytext mediumtext blob longtext tinyblob mediumblob longblob json binary(1) geometry point linestring polygon multipoint multilinestring multipolygon tinyint smallint mediumint bigint float double enum('test_enum1','test_enum2') geomcollection
*/

export interface RowDataPacket {
  Field        : string;          // 字段名
  Type         : string;          // 数据类型 int(11) enum('ZH', 'EN') simple-array, simple-json
  Collation    : string | null;   // 字符序列 基本为null
  Null         : 'YES' | 'NO';          // 是否可以为null YES | NO
  Key          : string;          // 是否是索引 PRI(主键) MUL(索引)
  Default      : string | number | null;   // 默认值 有可能为null
  Extra        : string;          // 附加信息 auto_increment(自增) 一般为''
  Privileges   : string;          // 字段权限 select,insert,update,references
  Comment      : string;          // 备注
}

export enum ColumnType {
  int = 'int',
  decimal = 'decimal',
  date = 'date',
  datetime = 'datetime',
  timestamp = 'timestamp',
  time = 'time',
  year = 'year',
  char = 'char',
  varchar = 'varchar',
  text = 'text',
  tinytext = 'tinytext',
  mediumtext = 'mediumtext',
  blob = 'blob',
  longtext = 'longtext',
  tinyblob = 'tinyblob',
  mediumblob = 'mediumblob',
  longblob = 'longblob',
  json = 'json',
  binary = 'binary',
  geometry = 'geometry',
  point = 'point',
  linestring = 'linestring',
  polygon = 'polygon',
  multipoint = 'multipoint',
  multilinestring = 'multilinestring',
  multipolygon = 'multipolygon',
  tinyint = 'tinyint',
  smallint = 'smallint',
  mediumint = 'mediumint',
  bigint = 'bigint',
  float = 'float',
  double = 'double',
  enum = 'enum',
  geomcollection = 'geomcollection'
}

export interface Column {
  type: ColumnType;          // 列类型
  name: string;              // 数据库列名
  length: number;            // 列类型的长度
  nullable: boolean;         // 列是否可以为null
  update: boolean;           // save操作是否更新列
  select: boolean;           // 查询时是否隐藏此列
  default: string | number;  // 默认值
  primary: boolean;          // @ PrimaryColumn
  unique: boolean;           // 唯一列
  comment: string;           // 备注
  precision: number;         // 整数位数
  scale: number;             // 小数点位数
  charset: string;           // 字符集
  collation: string;         // 排序顺序
  enum: string[] | any;      // 在enum列类型中使用
}


export const HAS_LENGTH = ['char', 'varchar', 'nvarchar', 'binary'];
export const HAS_PRECISION = ['dec', 'decimal', 'numeric', 'int', 'tinyint', 'smallint', 'mediumint', 'bigint'];
export const HAS_SCALE = ['dec', 'decimal', 'numeric', 'float', 'double'];
export const JSTYPEMAP: { [k in ColumnType]: string | any[] | Object } = {
  [ColumnType.int]: 'number',
  [ColumnType.decimal]: 'number',
  [ColumnType.date]: 'string',
  [ColumnType.datetime]: 'string',
  [ColumnType.timestamp]: 'string',
  [ColumnType.time]: 'string',
  [ColumnType.year]: 'string',
  [ColumnType.char]: 'string',
  [ColumnType.varchar]: 'string',
  [ColumnType.text]: 'string',
  [ColumnType.tinytext]: 'string',
  [ColumnType.mediumtext]: 'string',
  [ColumnType.blob]: 'string',
  [ColumnType.longtext]: 'string',
  [ColumnType.tinyblob]: 'string',
  [ColumnType.mediumblob]: 'string',
  [ColumnType.longblob]: 'string',
  [ColumnType.json]: 'string',
  [ColumnType.binary]: 'string',
  [ColumnType.geometry]: 'string',
  [ColumnType.point]: 'string',
  [ColumnType.linestring]: 'string',
  [ColumnType.polygon]: 'string',
  [ColumnType.multipoint]: 'string',
  [ColumnType.multilinestring]: 'string',
  [ColumnType.multipolygon]: 'string',
  [ColumnType.tinyint]: 'number',
  [ColumnType.smallint]: 'number',
  [ColumnType.mediumint]: 'number',
  [ColumnType.bigint]: 'number',
  [ColumnType.float]: 'number',
  [ColumnType.double]: 'number',
  [ColumnType.enum]: '[]',
  [ColumnType.geomcollection]: 'string'
};

export const RULES: { [t in ColumnType]: RegExp } = {
  int: /^int(\(\d+\))?$/i,
  decimal: /^decimal(\((\d+,?)+\))?$/i,
  date: /^date$/i,
  datetime: /^datetime$/i,
  timestamp: /^timestamp$/i,
  time: /^time$/i,
  year: /^year$/i,
  char: /^char(\(\d+\))?$/i,
  varchar: /^varchar(\(\d+\))?$/i,
  text: /^text$/i,
  tinytext: /^tinytext$/i,
  mediumtext: /^mediumtext$/i,
  blob: /^blob$/i,
  longtext: /^longtext$/i,
  tinyblob: /^tinyblob$/i,
  mediumblob: /^mediumblob$/i,
  longblob: /^longblob$/i,
  json: /^json$/i,
  binary: /^binary(\(\d+\))?$/i,
  geometry: /^geometry$/i,
  point: /^point$/i,
  linestring: /^linestring$/i,
  polygon: /^polygon$/i,
  multipoint: /^multipoint$/i,
  multilinestring: /^multilinestring$/i,
  multipolygon: /^multipolygon$/i,
  tinyint: /^tinyint(\(\d+\))?$/i,
  smallint: /^smallint$/i,
  mediumint: /^mediumint$/i,
  bigint: /^bigint$/i,
  float: /^float(\((\d+,?)+\))?$/i,
  double: /^double(\((\d+,?)+\))?$/i,
  enum: /^enum(\((.+?,?)?\))?$/i,
  geomcollection: /^geomcollection$/i
};