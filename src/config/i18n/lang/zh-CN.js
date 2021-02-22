export const langMap = {
    button:{
        actions:{
            lookOver:'查看',
            confirm:'确认',
            confirmSubmit:'确认提交',
            cancel:'取消',
            query:'搜索',
            reset:'重置',
            operate:'操作',
            addByForm:'新增',
            updateByForm:'更新',
            edit:'编辑',
            batchDelByIds:'批量删除',
            delById:'删除',
            authorize:'授权',
            assigningRoles:'分配角色',
            assigningPermissions:'分配权限',
            authorizationMenu:'授权菜单',
            setPosition:'设置职务',
            setAdminManager:'设置管理员',
            importData:'导入',
            exportData:'导出',
            exportSelectedAsExcel:'导出已选为Excel',
            exportAllAsExcel:'导出所有为Excel',
            uploadExportExcelTemplate:'上传导出excel模板',
            uploadDataExcel:'导入数据Excel文件上传',
            lockUser:'锁定用户',
            unlockUser:'解锁用户',
            lock:'锁定',
            unlock:'解锁',
            startUsing:'启用',
            publish:'发布',
            saveAsDraft:'存为草稿',
            goToIndexPage:'回到首页',
            filter:'过滤',
            switchToNextOne:'下一张',
            clearCache:'清理缓存',
            refreshMenuCache:'刷新菜单缓存',
            goNextStep:'下一步',
            goPreviousStep:'上一步',
            unfold:'展开',
            packUp:'收起',
            setAsRecommended:'设为推荐'
        },
        member:{
            account:'账号',
            password:'密码',
            rememberMe:'记住我',
            login:'登录',
            logOut:'退出登录',
            ersonalCenter:'个人中心',
            registerAnAccount:'注册账号',
            forgetPassword:'忘记密码',
            verificationCode:'验证码',
            loginForManager:'登录到后台管理'
        },
        placeholder:{
            pleaseEnterUserAccount:'请输入用户账号',
            pleaseEnterUserPwd:'请输入用户密码',
            filterSuperiors:'筛选上级'
        }
    },
    layout:{
        tagsView:{
            close:'关闭',
            closeOther:'关闭其他',
            closeAll:'关闭所有',
            cancelOperation:'取消操作',
        },
    },
    drawer:{
        actions:{
            detail:'详情'
        },
        common:{
            undefinedEnumKeyValue:"预期之外的枚举值"
        },
        em:{
            title:{
                detailForEmployeeInfo:'用户定义详情',
                detailForAnnouncement:'公告信息详情',
                detailForAnnouncementTag:'公告标签详情',
                detailForAnnouncementDraft:'公告草稿详情',
                detailForDefineMenu:'菜单定义详情',
                detailForDefineDepartment:'部门定义详情',
                detailForDefineModule:'模块定义详情',
                detailForDefineRole:'角色定义详情',
                detailForDefineJob:'职务详情',
                detailForDefinePermission:'权限定义详情',
                detailForDefineForm:'表单定义详情',
                detailForDefineFormType:'表单类型定义详情',
            }
        },
        obl:{
            title:{
                detailForArticle:'文章详情',
                detailForOblArticleCategory:'文章类别详情',
                detailForOblArticleTag:'文章标签详情',
                detailForArticleCollectCategory:'文章收藏类别详情',
                detailForArticleRecommend:'文章推荐详情',
            }
        }
    },
    table:{
        header:{
            operation:'操作',
            detail:'详情',
            description:'描述',
            weights:'权重',
            type:'类型'
        },
        config:{
            emptyData:'暂无数据',
            showQuery:'展示搜索',
            hiddenQuery:'隐藏搜索'
        },
        fields:{
            common:{
                name:'名称',
                superiorName:'上级名称',
                title:'标题',
                code:'编码',
                type:'类型',
                remark:'备注',
                createUserName:'创建人',
                updateUserName:'最后修改人',
                createTime:'创建时间',
                updateTime:'最后修改时间',
                description:'描述',
                level:'层级',
                keyword:'关键字',
                content:'内容',
                lockStatus:'锁定状态',
                startUsingStatus:'启用状态',
                label:'标注',
                style:'样式',
                tag:'标签',
                tagName:'标签名',
                category:'分类',
                categoryName:'分类名',
                lockedStatus:'锁状态',
                weights:'权重',
                summary:'简介'
            },
            em:{
                user:{
                    userAccount:'账号',
                    userName:'用户名',
                    avatarUrl:'头像',
                    email:'邮箱',
                    phone:'手机号',
                    userType:'用户类型',
                    sex:'性别',
                    address:'地址',
                    oldPwd:'原密码',
                    newPwd:'新密码'
                },
                module:{
                    iconName:'图标值',
                    moduleName:'模块名',
                },
                menu:{
                    menuName:'菜单名称',
                    parentMenuName:'上级菜单名',
                    urlJumpType:'路由跳转类型',
                    routerUrl:'路由地址',
                    hrefUrl:'外部地址',
                    iconName:'图标',
                },
                job:{
                    jobName:'职务名',
                },
                department:{
                    departmentName:'部门名',
                    parentDepartmentName:'上级部门名',
                    belongDepartment:'所属部门',
                    publishDepartment:'发布部门',
                },
                role:{
                    roleName:'角色名',
                },
                permission:{
                    permissionName:'权限名'
                },
                form:{
                    formName:'表单名',
                    formTitle:'表单标题',
                },
                formType:{
                    formTypeName:'表单名',
                },
                announcement:{
                    title:'标题',
                    keyWord:'关键字',
                    tagNameOfStr:'标签',
                    content:'内容',
                    publishDepartment:'发布部门'
                },
                announcementTag:{
                    tagName:'标签名',
                    description:'描述'
                },
                sysDic:{
                    name:'名称',
                    type:'类型',
                    code:'编码',
                    value:'值'
                }
            },
            obl:{
                article:{
                    title:'标题',
                    content:'内容',
                    summary:'简介',
                    tagNames:'标签',
                    categoryNames:'分类',
                    editorType:'编辑器类型',
                    viewCount:'浏览次数',
                    commentCount:'评论次数',
                    likeCount:'点赞次数',
                    collectCount:'收藏次数',
                    auditState:'审核状态',
                    isPublished:'发布状态',
                    publishTime:'发布时间',
                    tagIds:'标签id',
                    tagName:'标签',
                },
                articleCategory:{
                    name:'名称',
                    iconName:'图标',
                    parentName:'上级名称'
                },
                articleTag:{
                    name:'名称'
                },
                articleRecommend:{
                    articleTitle:'文章标题',
                    authorId:'作者',
                    summary:'简介',
                    rangeTime:'时间范围',
                    startTime:'开始时间',
                    endTime:'结束时间',
                    reason:'推荐原因',
                    recommendUser:'推荐人',
                    selectArticles:'已选文章'
                },
                articleCollectCategory:{
                    name:'名称',
                    iconName:'图标',
                    parentName:'上级名称'
                },
                userAccount:{
                    account:'账号',
                    userName:'用户名',
                    avatarUrl:'头像',
                    email:'邮箱',
                    userType:'用户类型',
                }
            }
        }
    },
    commons:{
        quill:{
            announcement:{
                placeholder:'请输入通知内容'
            }
        },
        forms:{
            pleaseChoose:'请选择',
            chooseDepartment:'选择部门',
            pleaseEnterTitle:'请输入标题',
            tips:{
                lookUpIcon:'点击查看可选图标',
                selectedIcon:'已选图标'
            },
            pleaseFillOut:'请填写{0}',
            pleaseSelect:'请勾选{0}',
            fillInValid:'请填写有效的{0}',
            pleaseFillOutTwo:'{0}或{1}不能为空',
            pleaseSelectRangeTime:'请选择{0}'
        },
        enums:{
            publishStatus:{
                published:'已发布',
                unpublished:'未发布',
            },
            auditStatus:{
                notApproved:'未审批',
                approval:'审批中',
                approved:'已审批',
            },
            jobType:{
                simpleJob:'普通职务'
            },
            menuUrlJumpType:{
                routerUrl:'Router地址跳转',
                outUrl:'在当前页面打开外部链接',
                outUrlBlank:'在新页面打开外部链接',
            },
            moduleType:{
                defaultHas:'默认拥有',
                authorizedDistribution:'授权分配',
            },
            roleType:{
                simpleRole:'普通角色',
                managerRole:'管理角色',
            },
            permissionType:{
                pageButton:'页面操作按钮',
                tableActionBtn:'表格内部按钮'
            },
            userSex:{
                man:'男',
                woman:'女',
            },
            userType:{
                simpleUser:'普通用户',
                root:'管理员',
                superRoot:'超级管理员',
                vip:'会员',
                superVip:'超级会员',
                generatedUser:'随机生成用户',
            },
            lockStatus:{
                locked:'已锁定',
                unlock:'未锁定'
            },
            switch:{
                open:'启用',
                close:'关闭'
            }
        },
        valueMap:{
            transferConf:{
                titleArr:['未选择','已选择'],
                locale:{
                    itemUnit:'项',
                    itemsUnit: '项',
                    notFoundContent: '列表为空',
                    searchPlaceholder:'在此处搜索'
                },
                operations:['选择','取消']
            },
            uploader:{
                status:{
                    uploading:'上传中...',
                    confirmUpload:'确认上传'
                },
                altInfo:'图片加载失败',
                atLeastNumberOfFiles:'请至少选择{0}个文件后提交！',
                maximumNumberOfFiles:'选择最多{0}个Excel文件',
                rangeSizeOfFiles:' 请选择{0}至{1}个Excel文件',
                popover:{
                    prompt:'上传提示',
                    message:{
                        excel:'请正确选择.xls或.xlsx格式的Excel文件',
                        image:{
                            limitSize:'图片文件必须小于{0}MB!',
                            onlySupportJpg:'只允许上传.jpg类型的文件!'
                        }
                    }
                }
            }
        },
        dashBoard:{
            universal:'常规',
            announcementList:'公告列表',
            articleList:'文章列表',
        }
    },
    message:{
        warning:{
            pleaseSelectTheOnlyRowOfDataForUpdate:'请选择唯一待更新的行！',
            pleaseSelectTheOnlyRowOfDataForDelete:'请选择唯一待删除的行！',
            pleaseSelectTheOnlyRowOfDataForStartUsing:'请选择唯一待启用的行！',
            pleaseSelectTheOnlyRowOfDataForSetPosition:'请选择唯一待设置职务的行！',
            pleaseSelectTheOnlyRowOfDataForLock:'请选择唯一待锁定的行！',
            pleaseSelectTheOnlyRowOfDataForAssigningPermissions:'请选择唯一待分配权限的行！',
            pleaseSelectTheOnlyRowOfDataForAuthorizationMenu:'请选择唯一待授权菜单的行！',
            pleaseSelectTheOnlyRowOfDataForUploadExcelTemplate:'请选择唯一待上传Excel模板的行！',
            pleaseSelectTheOnlyRowOfDataForExport:'请选择唯一待导出的行！',
            invalidDeleteOperation:'无效删除操作！',
            invalidLockOperation:'无效加锁操作！',
            invalidPublishOperation:'无效发布操作！',
            openInvalidRowDetails:'打开无效的行详情！',
            doNotAllowSelectionOfStartUsing:'所选项中包含已启用的项，请取消勾选所有已启用的项后重试！',
        },
        error:{
            failedDueToNotGettingId:'操作失败！未取得有效的id！',
            wrongVerificationCode:'验证码错误！',
            unknownExportCommand:'未知导出命令！',
            currentPageDoesNotSupportExportOperations:'当前页面不支持导出操作！',
            pageNotFound:'页面未找到！',
            unknowUser:'未知用户'
        },
        confirm:{
            isConfirmDeleteSelectedRow:'是否确认删除所选数据？',
            isConfirmDeleteWhatSelectedRow:'是否确认删除所选的{0}条数据？',
            isConfirmPublishSelectedRow:'是否确认发布所选数据？',
            isConfirmPublishWhatSelectedRow:'是否确认发布所选的{0}条数据？',
            isConfirmLockSelectedRow:'是否确认锁定所选数据？',
            isConfirmLockWhatSelectedRow:'是否确认锁定所选的{0}条数据？',
            isConfirmStartUsingWhatSelectedRow:'一旦启用后将无法禁用！请再次确认是否启用所选的{0}条数据？',
        },
        info:{
            actionOfCancelDelete:'操作:取消删除',
            actionOfCancelLock:'操作:取消锁定',
            actionOfCancelStartUsing:'操作:取消启用',
            actionOfCancelPublish:'操作:取消发布',
            tableCheckedSize:"已选择:{0} 。",
            registerOkAndGo:"注册成功!即将跳转到登录页面。"
        }
    },
    http:{
        notify:{
            message:{
                success:'信息:',
                warning:'警告:',
                error:'错误!'
            },
            description:{
                requestError:'请求出错',
                grantFailed:'获取授权失败,请重新登录!',
                accessDenied:'拒绝访问',
                resourceNotFound:'请求错误,未找到该资源',
                serverDistracted:'服务器开小差了',
                sessionExpired:'会话信息已过期，请重新登录！'
            }
        }
    },
    steps:{
        //必须有key切key必须为英文(请勿修改key)
        article:{
            create:{
                basic:{
                    key:'basic',
                    title:'写',
                    description:'写文章'
                },
                more:{
                    key:'more',
                    title:'其他',
                    description:'选择标签与分类'
                },
                done:{
                    key:'done',
                    title:'提交',
                    description:'提交文章'
                }
            }
        },
        forgetPwd:{
            verifyOldPwd:{
                key:'verifyOldPwd',
                title:'验证',
                description:'验证旧密码'
            },
            setNewPwd:{
                key:'setNewPwd',
                title:'修改密码',
                description:'填写新密码'
            },
        }
    },
    results:{
        universal:{
          success:{
              title:'操作成功'
          },
          failure:{
              title:'操作失败',
              extra:{
                  serverError:'系统出错了'
              }
          }
        },
        article:{
            create:{
                success:{
                    extra:{
                        viewDetail:'查看'
                    }
                },
                failure:{
                    extra:{
                        retry:'重试'
                    }
                }
            }
        }
    },
    descriptions:{
        userInfo:{
            title:'用户信息',
            labels:{
                account:'账号',
                userName:'用户名',
                phone:'手机号码',
                email:'邮箱地址',
                sex:'性别',
                address:'地址',
                userType:'用户类型',
                locked:'是否被锁定',
                state:'状态',
                createTime:'注册时间',
                hasRoles:'已有角色',
                hasPermissions:'已拥有的权限',
                hasJobs:'所属职务'
            }
        }
    }

}
